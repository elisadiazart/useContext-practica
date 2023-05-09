import { useContext } from 'react';
import { StyledHeader } from './styles';
import { CounterContext } from '../../App';

const Header = () => {
	const { counter } = useContext(CounterContext);
	return (
		<StyledHeader>
			<h2>{counter}</h2>
		</StyledHeader>
	);
};

export default Header;
