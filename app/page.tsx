/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    console.log({ meta: import.meta.url });
    return <h1>{import.meta.url}</h1>;
}

export const runtime = "edge";
