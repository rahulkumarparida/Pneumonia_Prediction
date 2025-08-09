import { useEffect, useState } from "react";

export default function PneumoniaPatients() {
  let [fetchData, setfetchData] = useState([]);

  let [fetchID , setFetcchID] = useState(null)
  useEffect(() => {
    async function getdata() {
      let res = await fetch("http://127.0.0.1:8000/api/scan/");
      let data = await res.json();
      console.log(data);
      setfetchData(data.reverse());
    }
    getdata();
  }, []);

  useEffect(() => {
    async function deleteData(pk) {
      if (pk !== null) {
      await fetch(`http://127.0.0.1:8000/api/scan/${pk}/`,{
               method: 'DELETE'
              }
        ).then((res)=>{
          if (res.ok){
            location.reload()
            alert('Deleted Successfully')
          }
        }).catch((err)=>{
          alert('Error: ', err)
          return err
        })
      }
    }
    deleteData(fetchID);
    setFetcchID(null)
  }, [fetchID]);

  const History = () => {
    return (
      <div
        className=" flex p-3 h-[100%] flex-wrap justify-center md:justify-start"
        id="History"
      >
        {
        fetchData.map((ele, idx) => {
            let percentage = (parseFloat(ele.confidance) * 100).toFixed(2)

          let bgclass = "";

          if (percentage <= 25)  bgclass = "healthy";
          else if (percentage <= 50) bgclass = "almostHealthy";
          else if (percentage <= 75)  bgclass = "maybeDisease";
          else bgclass = "diesease";
         

          return (
            <div
              key={idx}
              id="card"
              className={`h-100 rounded-lg w-60 m-3 bg-blue-300 ${bgclass}`}
            >
              <div className="image">
                <a href={ele.Xray_url} target="_blank">
                  <img
                    src={ele.Xray_url}
                    alt=""
                    className="w-full h-40 rounded-lg"
                  />
                </a>
              </div>
              <div className="head">
                <p className=" text-center text-white-300">{ele.Name}'s Data</p>
              </div>
              <div className="info px-2 py-1">
                <p className="py-1">Name: {ele.Name}</p>
                <p className="py-1">Result: {ele.result} </p>
                <p className="py-1">
                  Chances(Pneumonia):{" "}
                  {(parseFloat(ele.confidance) * 100).toFixed(2)}%{" "}
                </p>
                <p className="py-1">
                  Created At : {ele.created_at.slice(0, 10)}
                </p>
              </div>
              <div className="btns flex items-center justify-center py-2 m-1">
                
                <button
                  id={`${ele.id}`}
                  className={`delbtn border-1 p-1 rounded-sm bg-red-400 px-3 ${bgclass}`}
                  onClick={(e) => {
                    console.log(e.target.id)
                    setFetcchID(e.target.id)
                    e.preventDefault;
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="History p-2">
        <div className="head p-3">
          <p className="text-2xl text-cyan-700">Recent Results </p>
        </div>
        <div className="cards">
          
      <History />
        </div>
      </div>
    </div>
  );
}
