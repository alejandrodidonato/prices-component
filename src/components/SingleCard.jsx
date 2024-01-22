

const SingleCard = ({
    membership,
    storage,
    users,
    sendup,
    payment,
    featured
  }) => {
    return (
      <>
      { 
        featured ? 
        <div className="mb-10  rounded-lg bg-gradient-to-b from-background1 to-background2 shadow md:w-[20vw] lg:h-[55vh] lg:w-[25vw] ">
          <div className="p-8 text-center sm:p-9 md:p-10 xl:p-10">
            <h3 className="mb-1 mt-3 text-lg text-white">
                {membership}
            </h3>
            <p className="mb-7 text-xxxl text-white flex items-center justify-center">
                <span className="text-xxl mr-2">$</span> {payment}
            </p>
            <p className="mt-5 text-white text-sm p-4 border-solid border-light border-t border-b">
              {storage} Storage
            </p>
            <p className="text-white text-sm p-4 border-solid border-light border-b">
              {users} Users Allowed
            </p>
            <p className="text-white text-sm p-4 border-solid border-light border-b">
            Send up to {sendup} 
            </p>
  
          </div>
        </div>
        :
        <div className="mb-10 rounded-lg bg-white shadow md:w-[20vw] lg:h-[50vh] lg:w-[25vw]">
          <div className="p-8 text-center sm:p-9 md:p-6 xl:p-4 justify-center">
            <h3 className="mb-1 mt-3 text-lg text-primary">
                {membership}
            </h3>
            <p className="mb-7 text-xxxl text-primary flex items-center justify-center">
                <span className="text-xxl mr-2">$</span> {payment}
            </p>
            <p className="mt-3 text-primary text-sm p-4 border-solid border-secondary border-t border-b">
              {storage} Storage
            </p>
            <p className="text-primary text-sm p-4 border-solid border-secondary border-b">
              {users} Users Allowed
            </p>
            <p className="text-primary text-sm p-4 border-solid border-secondary border-b">
            Send up to {sendup} 
            </p>
  
          </div>
        </div>
        }
      </>
    );
  };

  export default SingleCard;