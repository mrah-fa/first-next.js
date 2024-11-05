import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="nav p-9 flex justify-between h-20 bg-slate-400 text-white">
        <h1>logo</h1>
        <div className="link  flex gap-14 ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/admin">Admin</Link>
        </div>
        <Link href="/login">Login</Link>
      </div>
    </>
  );
}

export default NavBar;
