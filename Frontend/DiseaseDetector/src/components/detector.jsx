import { useEffect, useState } from "react";
import load from "../assets/load.gif";
const Detector = () => {
  let [state, setState] = useState(false);
  let [loading, setLoading] = useState(false);
  let [fetchedData, setFetchedData] = useState([]);

  async function getParticularData(pk) {
    let res = await fetch(`http://127.0.0.1:8000/api/scan/${pk}`);
    let data = await res.json();
    console.log("Particular data:", data);
    setFetchedData(data);
    setState(true);
  }

  const Form = () => {
    let [data, setData] = useState({ fname: "", lname: "", selectedfile: "" });

    const formdata = new FormData();
    function handleSubmit(e) {
      setLoading(true);
      console.log(data);
      formdata.append("Name", data.fname + " " + data.lname);
      formdata.append("Xray", data.selectedfile);

      try {
        fetch(`http://127.0.0.1:8000/api/scan/`, {
          method: "POST",
          body: formdata,
        }).then((res) => {
          async function response() {
            let data = await res.json();
            console.log("Response after Post: ", data.id);

            getParticularData(data.id);
          }
          setTimeout(() => {
            response();
            setData({ fname: "", lname: "", selectedfile: "" });
            setLoading(false);
          }, 2000);
        });
      } catch (error) {
        console.error("Error uploading file:", error);
      }

      e.preventDefault();
    }

    return (
      <div className="max-w-lg mx-auto  bg-gradient-to-br from-cyan-500 via-teal-400 to-cyan-600 rounded-2xl shadow-lg p-6 md:p-8">
        <form
          method="post"
          className="space-y-5"
          onSubmit={(e) => {
            handleSubmit(e);
            e.preventDefault();
          }}
        >
          {/* First Name */}
          <div>
            <label
              htmlFor="fname"
              className="block text-white font-semibold mb-1"
            >
              {" "}
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter first name"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200 bg-white/90 text-gray-800 placeholder-gray-500"
              value={data.fname}
              onChange={(e) => {
                setData({ ...data, fname: e.target.value });
              }}
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lname"
              className="block text-white font-semibold mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Enter last name"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200 bg-white/90 text-gray-800 placeholder-gray-500"
              value={data.lname}
              onChange={(e) => {
                setData({ ...data, lname: e.target.value });
              }}
            />
          </div>

          {/* File Upload */}
          <div>
            <label
              htmlFor="file"
              className="block text-white font-semibold mb-1"
            >
              Upload X-ray Image
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="w-full px-3 py-2 rounded-lg bg-white/90 text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-teal-500 file:text-white hover:file:bg-teal-600"
              accept="image/png, image/jpeg,image/jpg"
              onChange={(e) => {
                setData({ ...data, selectedfile: e.target.files[0] });
                console.log(e.target.files[0]);
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2 flex justify-center">
            {loading ? (
              <img src={load} alt="" className="h-20 " />
            ) : (
              <button
                type="submit"
                className="bg-white  border-1 p-1 rounded-sm bg-red-400 px-3 shadow-xl"
              >
                📤 Submit
              </button>
            )}
          </div>
        </form>
      </div>
    );
  };

  const Card = () => {
    // {fetchedData.Xray_url}
    return (
      <div className=" rounded-sm shadow-xl  shadow-cyan-600">
        <div className="upper flex ">
          <div className="left ">
            <a href={fetchedData.Xray_url} target="_blank">
              <img
                src={fetchedData.Xray_url}
                alt=""
                className="h-80 rounded-sm"
              />
            </a>
          </div>
          <div className="right  p-5 flex flex-col justify-center ">
            <p className="p-3  m-4 rounded-sm shadow-xl border-1">
              Name : {fetchedData.Name}
            </p>
            <p className="p-3  m-4 rounded-sm shadow-xl border-1">
              Result : {fetchedData.result}
            </p>
            <p className="p-3  m-4 rounded-sm shadow-xl border-1">
              Confidance(Pneumonia):
              {(parseFloat(fetchedData.confidance) * 100).toFixed(2)}%
            </p>
            <p className="p-3  m-4 rounded-sm shadow-xl border-1">
              Created at: {fetchedData.created_at.slice(0, 10)}{" "}
            </p>
          </div>
        </div>
        <div className="lower flex flex-col p-5 items-center justify-center">
          <div className="btn">
            <button
              className="border-1 p-1 rounded-sm bg-blue-400 px-8 m-3"
              onClick={(e) => {
                setState(false);
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="GetYours"
      className="h-screen bg-cyan-300 flex  justify-center  items-center"
    >
      {state ? <Card /> : <Form />}
    </div>
  );
};
export default Detector;
