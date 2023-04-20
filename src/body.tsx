import Button from "./button";

export default function Body() {
    return (
        <section className="flex h-screen justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="bg-black text-white title py-3 px-3 rounded font-bold">Background Color :<span className="text-blue-200 color font-bold" /></h1>
                <Button />
            </div>
        </section>
    );
}

