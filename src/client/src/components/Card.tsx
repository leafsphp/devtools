const Card = ({ children, className, ...props }: any) => {
    return (
        <div
            className={
                'flex flex-col justify-center items-center cursor-pointer p-6 bg-gray-900/25 border border-gray-700/25 rounded-lg hover:border-gray-600/25 hover:bg-green-900/5 transition ease-in max-w-[140px] ' +
                className
            }
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
