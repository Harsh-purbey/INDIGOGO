import React from 'react';

const FooterForm = () => {
  return (
    <div className=" bg-fo text-white py-[80px] lg:px-[93px] space-y-8 text-3xl font-bold ">
      <h1 className="text-center">Get the newest campaigns in your inbox</h1>
      <p className="text-center text-[18px] font-normal">
        Exclusive weekly updates with new products, drops, and special offers.
      </p>
      <form className=" flex justify-center gap-4">
        <input
          type="text"
          placeholder="Your email address"
          className="outline-none py-[2px] px-[24px] rounded w-[500px] text-[1.125rem] text-white bg-fotter-input placeholder-white"
        />
        <button
          type="submit"
          className="w-[200px] text-[1.125rem] bg-fotter-button py-[16px] px-[24px] rounded"
        >
          SIGN ME UP
        </button>
      </form>

      <p className="text-[14px] text-center font-normal">
        By clicking “Sign me up” I have read and agree to Indiegogo’s{' '}
        <span className="underline">Terms of Use</span> and{' '}
        <span className="underline">Privacy Policy</span> .
      </p>
    </div>
  );
};

export default FooterForm;
