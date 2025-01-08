const FormTwo = () => {
  return (
    <form className="h-auto w-[25vw] p-6 rounded-md">
      <h1 className="text-2xl font-bold font-roboto">Personal Details</h1>
      <div className="flex flex-col w-full gap-4 my-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Date of Birth</p>
          <input
            placeholder="dd/mm/yyyy"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Gender</p>
          <input
            placeholder=""
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Country</p>
          <input
            placeholder="United Kingdom"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">State/Province</p>
          <input
            placeholder="+44 1234 567 890"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">City</p>
          <input className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Postal Code</p>
          <input
            placeholder="SW1W 0NY"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Profile Picture Upload</p>
          <input className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full" />
        </div>
      </div>
      <button className="h-auto w-full bg-blue-500 p-2 rounded-md">
        <p className="text-white font-roboto text-sm">Next</p>
      </button>
    </form>
  );
};

export default FormTwo;
