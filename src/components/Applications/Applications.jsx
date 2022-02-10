import { React, useState, useEffect } from "react";
import SingleApplication from "../SingleApplication";
import { getApplications } from "../api";
import styles from "./Applications.module.css";
import Button from "../ui/Button/Button";
import Spinner from '../ui/Spinner';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      const params = {
        _limit: 5,
        _page: page,
      };

      setLoading(true);
      const data = await getApplications(params);
      setApplications(prevState => prevState.concat(data));
      setLoading(false);
    }
    
    loadData();
  }, [page]);

  const increasePage = () => {
    setPage(page + 1);
  }

  return (
    <>
      <div className={styles.Applications}>
        { applications.map(application => (
          <SingleApplication key={application.id} application={application} />
        ))}
      </div>
      { isLoading && <Spinner /> }
      <div className={styles['load-more']}>
        <Button onClick={increasePage}>Load More</Button>
      </div>
    </>
  );
};

export default Applications;
