import { Button } from "@/components/ui/button";

import "./App.css";

import { ExternalLinkIcon } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Hero8 = () => {
  return (
    <section className="py-32">
      <div className="overflow-hidden">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 flex flex-row gap-4 justify-center text-pretty text-4xl font-medium lg:text-8xl logo">
                <img
                  src="/images/logo.png"
                  className="size-24"
                  alt="TallinnJS Community"
                />
                TallinnJS
              </h1>
              <p className="mx-auto mt-12 max-w-screen-md lg:text-3xl leading-relaxed">
                We are the flagship JavaScript community in Tallinn
              </p>
              <p className="mx-auto max-w-screen-md lg:text-xl pt-12">
                Join us for engaging talks, hands-on workshops, and lively
                discussions - let's learn, collaborate, and build together!
              </p>
              <span className="mt-12 mx-4 inline-flex items-center -space-x-4">
                <Avatar className="size-20 border-8 border-primary">
                  <AvatarImage src="https://secure.meetupstatic.com/photos/member/c/2/5/e/highres_315289758.jpeg" />
                </Avatar>
                <Avatar className="size-20 border-8 border-primary">
                  <AvatarImage src="https://secure.meetupstatic.com/photos/member/a/0/0/a/highres_321580970.jpeg" />
                </Avatar>
                <Avatar className="size-20 border-8 border-primary">
                  <AvatarImage src="https://secure.meetupstatic.com/photos/member/a/3/1/9/highres_321101753.jpeg" />
                </Avatar>
                <Avatar className="size-20 border-8 border-primary">
                  <AvatarImage src="https://secure.meetupstatic.com/photos/member/2/1/9/a/highres_295148602.jpeg" />
                </Avatar>
                <Avatar className="size-20 border-8 border-primary">
                  <AvatarImage src="https://secure.meetupstatic.com/photos/member/b/9/c/6/highres_319067558.jpeg" />
                </Avatar>
                <div className="pl-6 text-slate-500">+1k members</div>
              </span>
              <div className="mt-8 mb-12 mx-auto flex w-1/3 flex-col justify-center gap-2 sm:flex-col">
                <Button className="py-6 primary-cta" asChild>
                  <a
                    href="https://www.meetup.com/tallinn-js/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join us on Meetup
                    <ExternalLinkIcon className="" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <img
            src="/images/tallinnjs.jpeg"
            alt="TallinnJS Community"
            className="mx-auto mt-12 max-h-[700px] w-full max-w-5xl rounded-xl object-cover shadow-xl"
          />
          <Button asChild className="mt-24" variant="secondary">
            <a
              href="https://archive.tallinnjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Archive
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      {" "}
      <Hero8 />
    </>
  );
}

export default App;
