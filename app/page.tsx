/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    console.log({ meta: import.meta.url });
    return (
        <>
            <h1>Meta:</h1>
            <pre>{JSON.stringify({ meta: import.meta.url }, null, 2)}</pre>
        </>
    );
}

export const runtime = "edge";
