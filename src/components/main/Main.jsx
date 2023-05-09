import { useContext } from 'react';
import Button from '../button/Button';
import { CounterContext } from '../../App';

const Main = () => {
	const { counter, setCounter } = useContext(CounterContext);
	return (
		<main>
			<Button counter={counter} setCounter={setCounter} amount={1} />
			<Button counter={counter} setCounter={setCounter} amount={2} />
			<Button counter={counter} setCounter={setCounter} amount={3} />
		</main>
	);
};

export default Main;
