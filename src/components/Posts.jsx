import { useState, useRef } from "react";

function Posts() {
  const [formData, setFormData] = useState({
    titlu: "",
    continut: "",
  });

  //handling the changes in the input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //posting the added data to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://robertuibar.pythonanywhere.com/api/post/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Data posted successfully");
      // Optionally, clear the form after successful submission
      setFormData({
        titlu: "",
        continut: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const btnRef = useRef(null);

  return (
    <div className=" overflow-hidden w-screen h-[15rem] flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
        <input
          className=" w-[40vw] p-2 text-2xl border-2 rounded-3xl"
          type="text"
          name="titlu"
          value={formData.titlu}
          onChange={handleChange}
        ></input>
        <input
          className=" w-[40vw] p-2 text-2xl border-2 rounded-3xl"
          type="text"
          name="continut"
          value={formData.continut}
          onChange={handleChange}
        ></input>
        <button
          ref={btnRef}
          onMouseOver={() => {
            btnRef.current.style.backgroundColor = "#00408F";
          }}
          onMouseLeave={() => {
            btnRef.current.style.backgroundColor = "#004BA8";
          }}
          onClick={handleSubmit}
          className="w-[40vw] p-2 bg-[#004BA8] rounded-3xl duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Posts;
