import React from "react";
import Head from "next/head";
import styles from "../app/page.module.css";
import Script from "next/script";
import TextComponent from "../app/components/TextComponent";
import ImageComponent from "../app/components/ImageComponent";
import Navbar from "../app/components/navbar";
import Footer from '../app/components/footer';
const People = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CWC Club | People</title>
        <link rel="icon" type="image/x-icon" href="CSC_Logo.ico"></link>
      </Head>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />

      <link
        href="https://fonts.cdnfonts.com/css/cascadia-code"
        rel="stylesheet"
      ></link>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body {
          font-family: 'Cascadia Code', sans-serif;
          background: rgb(0,0,0);
          background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 21%, rgba(0,0,0,1) 26%, rgba(5,17,9,1) 32%, rgba(8,28,14,1) 39%, rgba(10,36,18,1) 45%, rgba(14,49,25,1) 54%, rgba(16,58,30,1) 58%, rgba(19,69,35,1) 65%, rgba(23,82,42,1) 71%, rgba(29,102,53,1) 76%, rgba(32,115,60,1) 81%, rgba(36,128,67,1) 87%, rgba(39,137,72,1) 93%, rgba(39,137,72,1) 100%); 
        }
      `,
        }}
      />
      <Navbar position="fixed" />
      <div className={styles.bg} style={{ fontFamily: 'Cascadia Code, monospace' }}>
        <div
          className={styles.heading}
          style={{ marginTop: "-2rem", color: "rgb(252, 3, 3)" }}
        >
          <div
            className={`${styles.radioGroup} d-flex flex-wrap justify-content-center `}
          ></div>
        </div>
        <br />
        <br />
        <br />
        <TextComponent title="Patrons" />
        <br />
        <ImageComponent
          imageSrc1="/images/vicepresident.jpg"
          name1="Hemal Shingloo"
          namex1="Vice President , CWC Club"
        />
        <br />
      


        <TextComponent title="Club Leads" />
        <br />
        <div className="leads">
        { <ImageComponent 
          imageSrc1="/images/designteamlead.jpg"
          name1="Utkarsh Singh, Design team Lead"
          imageSrc2="/images/ehteamlead.jpg"
          name2="Pradyumn Singh Padiyar EH Team Lead"
          imageSrc3="/images/financelead.jpg"
          name3="Vedang MaheshwariFinance and sponsorship lead"
        /> }
       
        <br />
 </div>
        {/* <TextComponent title="Core Team(2021)" /> */}
        <br />
        <div className="leads">
        <ImageComponent 
          imageSrc1="/images/medialead.jpg"
          name1="Bhavya Rastogi
          Media and Marketing Lead"
          imageSrc2="/images/contentlead.jpg"
          name2="Content Lead"
          imageSrc3="/images/operationlead.jpg"
          name3="Ayan Panda Operation Lead"
        />
        <br />
        </div>
        <ImageComponent
          imageSrc1="/images/webteam.jpg"
          name1="Aryan Web Team Lead"
          imageSrc2="/images/prlead.jpeg.jpg"
          name2="Ayushi PR lead"
          // imageSrc3="/images/richa.jpg"
          // name3="Richa"
        />
        <br />


        {/* <TextComponent title="Core Team(2022)" /> */}
        <br />
        {/* <ImageComponent
          imageSrc1="/images/gunj.jpg"
          name1="Gunj"
          imageSrc2="/images/sarthak1.jpg"
          name2="Sarthak"
          imageSrc3="/images/abel2.jpg"
          name3="Abel"
        /> */}
        <br />
        {/* <ImageComponent
          imageSrc1="images/vedanta3.jpg"
          name1="Vedanta"
          imageSrc2="/images/shravasthi.jpg"
          name2="Shravasti"
          imageSrc3="images/kaustubh1.jpg"
          name3="Kaustubh"
        /> */}
        <br />
        {/* <ImageComponent
          imageSrc1="/images/purandhar.jpg"
          name1="Purandhar"
          imageSrc2="/images/goutham.jpeg"
          name2="Goutham"
          imageSrc3="/images/gaurav1.jpg"
          name3="Gaurav"
        /> */}
        <br />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        />
      </div>
        <Footer />
    </div>
  );
};

export default People;
