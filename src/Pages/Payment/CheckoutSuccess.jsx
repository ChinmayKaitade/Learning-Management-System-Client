import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useEffect } from "react";
import { getUserData } from "../../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  });

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex items-center justify-center text-white">
        <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
          <h1 className="bg-green-600 absolute text-center top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Payment Successful
          </h1>

          <div className="px-4 flex flex-col items-center justify-center space-y-2">
            <AiFillCheckCircle className="text-green-500 text-5xl" />
            <div className="text-center space-y-1">
              <h2 className="text-xl text-yellow-500 font-bold">
                Welcome to the Pro Bundle!
              </h2>
              <p className="text-left text-lg font-semibold">
                Now you can enjoy all the courses.
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-3 text-xl font-bold text-center rounded-br-lg rounded-bl-lg"
          >
            <button>Go to Dashboard</button>
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
};
export default CheckoutSuccess;
