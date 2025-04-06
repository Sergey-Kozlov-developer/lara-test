export default function Welcome() {
    const nav = ['Home', 'Skills', 'About'];

    return (
        <div className="container mx-auto">
            <h1 className="text-red-500">Hello</h1>
            <div className="flex gap-5">
                {nav.map((items) => (
                    <a href="">{items}</a>
                ))}
            </div>
        </div>
    );
}
