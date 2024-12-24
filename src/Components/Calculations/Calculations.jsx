
const Calculations = () => {
    return (
        <div className="w-1/3 ml-6 border-2 border-slate-200 rounded-2xl py-3">
            <h1 className="font-bold text-2xl text-center mb-4">Want to Cook :</h1>
            <div className="border-t-2 border-slate-200 "></div>
            <table className="mt-4 text-slate-600">
                <tr className="flex justify-around">
                    <th className="pl-14">Name</th>
                    <th className="pl-14">Time</th>
                    <th className="pl-8">Calories</th>
                </tr>
            </table>
            <table className="mt-3 text-slate-600">
                <tr className="flex justify-between items-center bg-slate-100 p-2">
                    <td className="m-1">1</td>
                    <td className="text-center">pasta with chicken</td>
                    <td className="text-center">30 minutes</td>
                    <td className="text-center">450 calories</td>
                    <td><button className="btn btn-success rounded-2xl text-black">Preparing</button></td>
                </tr>
            </table>

            <div className="mt-12 mb-3">
                <h1 className="font-bold text-2xl text-center mb-4">Currently cooking :</h1>
                <div className="border-t-2 border-slate-200 "></div>
                <table className="mt-4 text-slate-600">
                    <tr className="flex justify-around">
                        <th className="pl-12">Name</th>
                        <th className="pl-16">Time</th>
                        <th className="pl-8">Calories</th>
                    </tr>
                </table>
            </div>

            <div className="bg-slate-100">
                <table className="p-4">
                    <tr>
                        <td className="p-2">1</td>
                        <td className="p-2">pasta with chicken</td>
                        <td className="p-2">30 minutes</td>
                        <td className="p-3">450 calories</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Calculations;