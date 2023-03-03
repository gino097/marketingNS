import Icon from '@material-tailwind/react/Icon';

export default function AdminNavbar() {
    return (
        <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="flex justify-end items-center w-full">
                    <div className="flex">
                        <button className="flex items-center gap-2 bg-white hover:bg-light-blue-500 text-blue-700 text-sm text-gray-700 hover:text-blue-700 py-2 px-4 border border-light-blue-500 hover:border-transparent rounded" type="button">
                            <Icon name="logout" size="2xl" />
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
