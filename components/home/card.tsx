import React from "react";
import Link from "next/link";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <Link href="/site">
          <button className="card-button">site</button>
        </Link>
      </div>
      <div className="card">
        <Link href="/site">
          <button className="card-button">site</button>
        </Link>
      </div>
      <div className="card">
        <Link href="/site">
          <button className="card-button">site</button>
        </Link>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          width: 96%;
          margin: 0 auto;
        }
        .card {
          margin-top: 64px;
          flex: 1;
          height: 200px;
          border-radius: 8px;
          border: 5px solid #08fc9c;
          background-color: #212121;
          margin-right: 2%;
          margin-left: 2%;
          width: 30%;
        }
        .card-button {
          width: 100%;
          height: 100%;
          border: none;
          background-color: transparent;
          color: #08fc9c;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Card;
