import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Navbar from "../../components/Navbar";

//Browser....
function signIn({ providers }) {
  return (
    <>
      <Navbar />

      <div className="flex items-center flex-col  justify-center h-full py-2 px-14 text-center">
        <img
          className="w-80"
          src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
          alt="image"
        />
        <div className="mt-30 ">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 text-white rounded-lg "
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
