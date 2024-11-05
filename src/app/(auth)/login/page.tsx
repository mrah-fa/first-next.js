import Link from "next/link";
import React from "react";

function loginPage() {
  return (
    <>
      <div className="card max-w-[300px] w-full h-56 flex justify-center items-center flex-col gap-8 p-5 bg-slate-700 text-white rounded-md">
        <p>Login form</p>
        <p>
          Don't have any account ? <Link className="pl-1" href="/register">Register</Link>{" "}
        </p>
      </div>
    </>
  );
}

export default loginPage;
