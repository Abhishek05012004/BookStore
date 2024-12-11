import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-4">
        <div className="card bg-black text-white w-92 h-[450px] shadow-xl">
          <figure className="flex justify-center items-center h-64 bg-white p-4 shadow-2xl overflow-hidden ">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{ maxWidth: "350px", maxHeight: "300px" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-pink-500 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
