import { useEffect } from "react";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/RazorpaySlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const razorpayKey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector(
    (state) => state?.razorpay?.subscription_id
  );
  const isPaymentVerified = useSelector(
    (state) => state?.razorpay?.isPaymentVerified
  );

  const userData = useSelector((state) => state?.auth?.data);

  // for storing the payment details after successful transaction
  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };

  const handleSubscription = async (e) => {
    e.preventDefault();

    // checking for empty payment credential
    if (!razorpayKey || !subscription_id) {
      toast.error("Something went wrong");
      return;
    }
    const options = {
      key: razorpayKey,
      subscription_id: subscription_id,
      name: "Coursify EdTech Pvt. Ltd.",
      description: "Subscription. Enjoy premium features with this plan.",
      theme: {
        color: "#F37254",
      },

      handler: async function (response) {
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        paymentDetails.razorpay_subscription_id =
          response.razorpay_subscription_id;

        // displaying the success message
        toast.success("Payment Successful");

        // verifying the payment
        const res = await dispatch(verifyUserPayment(paymentDetails));
        console.log(isPaymentVerified);

        // redirecting the user according to the verification status
        res?.payload?.success
          ? navigate("/checkout/success")
          : navigate("/checkout/fail");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  async function load() {
    await dispatch(getRazorPayId());
    await dispatch(purchaseCourseBundle());
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <HomeLayout>
      {/* checkout page container */}
      <form
        onSubmit={handleSubscription}
        className="min-h-[90vh] flex items-center justify-center text-white"
      >
        {/* checkout card */}
        <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
          <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl0lg rounded-tr-lg">
            Subscription Bundle
          </h1>

          <div className="px-4 space-y-5 text-center">
            <p className="text-[17px]">
              This purchase will allow you to access all available course of our
              platform for{" "}
              <span className="text-yellow-500 font-bold">
                <br />1 Year Duration
              </span>{" "}
              All the existing and new launched courses will be also available
            </p>

            <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
              <BiRupee />
              <span>499</span> only
            </p>

            <div className="text-gray-200">
              <p>100% Refund on Cancellation</p>
              <p>* Terms and Conditions Applied *</p>
            </div>
            
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2"
            >
              Buy now
            </button>
          </div>
        </div>
      </form>
    </HomeLayout>
  );
};
export default Checkout;