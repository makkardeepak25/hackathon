import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./SchoolDetails.module.css";

function SchoolDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  let parentData = localStorage.getItem("parent");
  let patData = JSON.parse(parentData);
  const [reviewData, setReviewData] = useState([]);
  // if (patData.role === "parent") {
  //     setIsAuth(true)
  // }
  // if(parentData)
  const getData = () => {
    axios.get(`http://localhost:8000/schools/${id}`).then(res => {
      setData(res.data.data);
      setLoading(true);
    });
  };
  const getReviewsData = () => {
    axios.get(`http://localhost:8000/review/${id}/reviews`).then(res => {
      setReviewData(res.data.data);
    });
    };
    console.log(reviewData)
  useEffect(() => {
    getData();
    getReviewsData();
  }, []);
  const handleApply = () => {
    if (patData.role === "parent") {
      history.push(`/applypage/${id}`);
    } else {
      history.push("/login");
    }
  };
  const handleReview = () => {
    if (patData.role === "parent") {
      history.push(`/reviewpage/${id}`);
    } else {
      history.push("/login");
    }
  };

  return Loading ? (
    <div className={styles.Pmaindiv}>
      <div className={styles.Psubdiv}>
        <div className={styles.Pimagesubdiv}>
          <img className={styles.Pimg1} src={data.school_images} alt="" />
          <img className={styles.Pimg1} src={data.school_images} alt="" />
        </div>
        <div className={styles.Pimagesubdiv}>
          <img className={styles.Pimg1} src={data.school_images} alt="" />
          <img className={styles.Pimg1} src={data.school_images} alt="" />
        </div>
      </div>
      <div className={styles.psubdiv2}>
        <h2> {data.school_name.toUpperCase()}</h2>
        <h2> {data.city.toUpperCase()}</h2>
        <h3> {data.address.toUpperCase()}</h3>

        <br />
        <h2>Education Details:</h2>
        <h3>Fees:{data.annual_fee}Lakh/Year</h3>
        <h3>Educational Board: {data.board.toUpperCase()} Board</h3>
        <h3>Max Standard: {data.max_standard}th</h3>

        <br />
        <h2>Contact Details: </h2>
        <span>Phone: </span>
        <a href={`tel:${data.phone_number}`}>{data.phone_number} </a>
        <br />
        <span>E-mail: </span>
        <a href={`mailto:${data.email}`}>{data.email}</a>
        <br />
        <h2>Other Details: </h2>
        <h3>GST Number: {data.gst_number}</h3>
        <h3>Teacher Ratio: {data.teacher_student_ratio} </h3>
        <div>
          <button className={styles.applyButton} onClick={handleApply}>
            Apply
          </button>
          <br />
          <button className={styles.applyButton} onClick={handleReview}>
            Add Review
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.loading}>...Loading,Please Wait</div>
  );
}

export default SchoolDetails;
