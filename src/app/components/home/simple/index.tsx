import Link from "next/link";

const Simple = () => {
  return (
    <section className="bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10">
      <div className="">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center font-semibold mb-6 sm:leading-16 capitalize">
              A Simple, Secure Way to Connect and Communicate
            </h2>

            <p className="text-center text-lightpurple text-lg font-normal mb-8">
              Chat, call, and share freely on a platform built with privacy at
              its core. HelloChats keeps your conversations encrypted, your
              identity protected, and your communication experience beautifully
              simple.
            </p>
          </div>

          <div className="flex justify-center">
           <Link
                    href="/hellochat.apk"
                    download
                    className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl mr-6 cursor-pointer"
                  >
                    Download Now
                  </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;
