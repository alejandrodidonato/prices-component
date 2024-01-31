

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
          {featured ?
              <div className="flex justify-center mb-10 rounded-lg bg-gradient-to-b from-background1 to-background2 shadow w-[70vw] md:w-[30vw] lg:h-[63vh] lg:w-[25vw] ">
                  <div className="p-8 text-center sm:p-9 md:p-10 xl:p-6 xl:pt-12 min-w-full">
                      <h3 className="mb-1 mt-3 text-lg text-white">
                          {membership}
                      </h3>
                      <p className="mb-4 text-xxxl md:text-xxl lg:text-xxxl text-white flex items-center justify-center">
                          <span className="text-xl lg:text-xxl md:text-lg mr-2">$</span> {payment}
                      </p>
                      <p className="text-xs text-white lg:text-sm md:text-xs p-4 border-solid border-light border-t border-b">
                          {storage} Storage
                      </p>
                      <p className="text-xs text-white lg:text-sm md:text-xs p-4 border-solid border-light border-b">
                          {users} Users Allowed
                      </p>
                      <p className="text-xs text-white lg:text-sm md:text-xs p-4 border-solid border-light border-b">
                          Send up to {sendup}
                      </p>
                      <button className="bg-white text-background2 container py-3 mt-10 text-xs rounded-md tracking-widest hover:bg-opacity-0 hover:text-white hover:border-white border">
                          LEARN MORE
                      </button>

                  </div>
              </div>
              :
              <div className="flex justify-center mb-10 rounded-lg bg-white shadow w-[70vw] md:w-[30vw] lg:h-[58vh] lg:w-[25vw] ">
                  <div className="p-8 text-center sm:p-9 md:p-6 xl:p-6 min-w-full">
                      <h3 className="mb-1 mt-3 text-lg text-primary">
                          {membership}
                      </h3>
                      <p className="mb-5 text-xxxl lg:text-xxxl md:text-xxl text-primary flex items-center justify-center">
                          <span className="text-xl lg:text-xxl md:text-lg mr-2">$</span> {payment}
                      </p>
                      <p className="text-xs mt-3 text-primary lg:text-sm md:text-xs p-4 border-solid border-secondary border-t border-b">
                          {storage} Storage
                      </p>
                      <p className="text-xs text-primary lg:text-sm md:text-xs p-4 border-solid border-secondary border-b">
                          {users} Users Allowed
                      </p>
                      <p className="text-xs text-primary lg:text-sm md:text-xs p-4 border-solid border-secondary border-b">
                          Send up to {sendup}
                      </p>
                      <button className="bg-gradient-to-b from-background1 to-background2 text-white container py-3 mt-10 text-xs rounded-md tracking-widest hover:bg-gradient-to-b hover:from-white hover:to-white hover:text-background2 hover:border-background2 hover:border hover:border-solid hover:border-black">
                          LEARN MORE
                      </button>

                  </div>
              </div>
          }
      </>
  );
};

export default SingleCard;