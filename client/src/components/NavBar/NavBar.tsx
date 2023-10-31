import Logo from "../../assets/logo.svg?react";

const NavBar = () => {
  return (
    <div className="w-full py-6 md:py-8  ">
      <section className="max-w-6xl h-full mx-auto flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center ">
          <Logo className="h-14" />
          <h2 className="font-sen text-2xl font-bold text-gray-800">
            Propiedad 360{" "}
          </h2>
        </div>
        <button className="text-xl font-sen font-semibold bg-blue-500 px-6 py-2 rounded-lg text-blue-100 ">
          Login
        </button>
      </section>
    </div>
  );
};

export default NavBar;
