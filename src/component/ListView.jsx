export default function ListView(resultData) {
    return (
        <table>
            <tbody>
                {resultData.map(item => {
                    return <tr>                   
                    <td>{item.rank} </td>
                    <td>{item.movieNm} </td>
                    <td>{item.openDt} </td>
                </tr>;
                })}
            </tbody>
        </table>
    );
}