import Nav from "./Nav";

const PageLayout = ({ children }: any) => {
    return (
        <div className="flex h-screen w-screen">
            <Nav />
            <div className="w-[calc(100vw-100px)] h-full absolute right-0 overflow-x-hidden">{children}</div>
        </div>
    );
};

export default PageLayout;
