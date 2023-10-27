import React from "react";
import PageTitle from "../../components/PageTitle";

function Learn() {
  return (
    <div className="flex flex-col text-center justify-center mx-auto"> {/* Apply text-center to center its children horizontally */}
      <PageTitle title={'Welcome to the learn page!'}/>

      <div className="justify-center mx-auto">
        <iframe
          className="py-4"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NfurkrZEn3Q?si=hWIKWLak8c6t-ybi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          className="py-4"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v-mlEQ7KW5Q?si=GgFR3SLLPUO9Z48-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>

        <iframe
          className="py-4"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0iRbD5rM5qc?si=1x41j97VSwjAmfEf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  )
}

export default Learn;
