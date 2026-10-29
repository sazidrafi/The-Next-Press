export const metadata = {
  title: "The Next Press - about us",
};

const values = [
  {
    title: "Accuracy",
    text: "We check our facts before we publish and correct our mistakes openly when we get something wrong.",
  },
  {
    title: "Independence",
    text: "Our reporting is not shaped by advertisers, parties or personal interests. We follow the story.",
  },
  {
    title: "Accountability",
    text: "We question those in power and hold ourselves to the same standard we expect from them.",
  },
];

const AboutUsPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      {/* heading */}
      <div className="mb-10">
        <div className="mb-4 h-12 w-1.5 rounded-full bg-error"></div>
        <h1 className="text-4xl font-bold">About The Next Press</h1>
        <p className="mt-4 text-lg text-gray-500">
          Journalism without fear or favour.
        </p>
      </div>

      {/* mission */}
      <section className="mb-12">
        <h2 className="mb-3 text-xl font-bold">Who we are</h2>
        <p className="leading-relaxed text-gray-600 text-justify">
          The Next Press is a news portal built to keep readers informed with
          timely, reliable and easy-to-read reporting. We cover politics,
          business, technology, sports and the stories that matter in Bangladesh
          and around the world.
        </p>
        <p className="mt-4 leading-relaxed text-gray-600 text-justify">
          We believe good news should be clear, fair and accessible to everyone,
          whether you read it on a phone during your commute or on a desktop at
          home.
        </p>
      </section>

      {/* values */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold">What we stand for</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-md border border-base-300 p-5"
            >
              <h3 className="mb-2 font-bold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section>
        <h2 className="mb-3 text-xl font-bold">Get in touch</h2>
        <p className="text-gray-600">
          Have a story tip or feedback? Write to us at{" "}
          <a
            href="mailto:newsroom@thenextpress.com"
            className="text-error hover:underline"
          >
            newsroom@thenextpress.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
