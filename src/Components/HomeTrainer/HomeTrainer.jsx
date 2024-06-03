import React from "react";
import styles from "./HomeTrainer.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Container,Row,Col } from "react-bootstrap";
const HomeTrainer = () => {
  const Trainers=[
    {
        id:1,
        Name:"Awais Majeed",
        img:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8MXwwfHx8MA%3D%3D",
        Designation:"CEO",
        fb:'www.facebook.com',
        linkedIn:'www.facebook.com',
        twitter:'www.facebook.com'

    },
    {
        id:2,
        Name:"Ramish",
        img:"https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfDF8MHx8fDA%3D",
        Designation:"Apex Dev",
        fb:'www.facebook.com',
        linkedIn:'www.facebook.com',
        twitter:'www.facebook.com'

    },
    {
        id:3,
        Name:"Ahsan",
        img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfDF8MHx8fDA%3D",
        Designation:"Php Dev",
        fb:'www.facebook.com',
        linkedIn:'www.facebook.com',
        twitter:'www.facebook.com'

    },
  ]
    return (
    <section className={styles.home_trainer}>
       <h2>Our Team</h2>
      <Container>
      <Row >
        <Col md={12} >
          
          <div className={styles.trainer_wrap}>
           {Trainers.map((trainer) => {
            return <div className={styles.employeeContainer}>
              <div className="row">
                <div className={`${styles.employee1} col-lg-4`}>
                  <div className={styles.employee}>
                    <div className={styles.employeeImage}>
                      <img
                        src={trainer.img}
                        className="img-fluid d-block m-auto"
                        alt="employee-image"
                      />
                    </div>
                    <div className={styles.employeeDetails}>
                      <div className={styles.employeeName}>
                        <h1 className="text-center">
                          {trainer.Name}
                          <br />
                          <span className={styles.employeeRole}>{trainer.Designation}</span>
                        </h1>
                      </div>
                      <div className={styles.employeeSocialLink}>
                        <ul>
                          <li>
                            <FaLinkedin color="white" size={30} />
                          </li>
                          <li>
                            <FaXTwitter color="white" size={30} />
                          </li>
                          <li>
                            <FaFacebookSquare color="white" size={30} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
           })}
            
          </div>
        </Col>
      </Row>
      </Container>
    </section>
  );
};

export default HomeTrainer;
