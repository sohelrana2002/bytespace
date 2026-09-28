export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="font-poppins text-heading-l">
        Poppins Heading Test — 72px SemiBold
      </h1>

      <h2 className="font-poppins text-heading-m">Poppins Heading M — 44px</h2>

      <p className="font-satoshi text-body-l">
        Satoshi Body L — 18px Regular। Satoshi font render
      </p>

      <p className="font-satoshi text-body-m">
        Satoshi Body M — 16px Regular। 0123456789
      </p>

      <p className="font-satoshi text-label-m font-medium">
        Satoshi Medium Label — 500 weight
      </p>

      <p className="font-satoshi font-bold">
        Satoshi Bold — 700 weight (fallback test)
      </p>
    </main>
  );
}
