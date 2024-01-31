import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    font: {
        fontFamily: 'Montserrat',
    },
});
export function getUserIdFromLocalStorage() {
    return localStorage.getItem("userId");
}