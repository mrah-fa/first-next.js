import Link from "next/link";
import React from "react";

function registerPage() {
  return (
    <>
      <div className="card max-w-[300px] w-full h-56 flex justify-center items-center flex-col gap-8 p-5 bg-slate-700 text-white rounded-md">
        <p>register form</p>
        <p>
          Do you have any account ?
          <Link className="pl-1" href="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </>
  );
}

export default registerPage;
