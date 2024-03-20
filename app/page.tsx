/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    const url = new URL("../public/favicon.ico", import.meta.url);
    console.log({ meta: url });
    return (
        <>
            <h1>Meta:</h1>
            <pre>{JSON.stringify({ "import.meta.url": url }, null, 2)}</pre>
        </>
    );
}

export const runtime = "edge";
