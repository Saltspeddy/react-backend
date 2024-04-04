import React from "react";

function DeletePosts(prop) {
  const pk = prop.id;
  const handleDelete = async (pk) => {
    try {
      console.log(`https://robertuibar.pythonanywhere.com/api/${pk}/`);
      const response = await fetch(
        `https://robertuibar.pythonanywhere.com/api/${pk}/`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Handle success, such as refreshing the data
        console.log("Data deleted successfully");
      } else {
        console.error("Failed to delete data:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  return (
    <div>
      <button
        className="bg-[#FF0800] p-2 rounded-3xl mt-3"
        onClick={() => handleDelete(pk)}
      >
        Delete
      </button>
    </div>
  );
}

export default DeletePosts;
