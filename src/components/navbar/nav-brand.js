import React from 'react';
// import fp from '../../images/fp.png';
import fp from '../../images/fp-logo-2x.png';
import fpMobile from '../../images/FINAL_fp_logo@2x.png';
import { Fp } from './style';

const NavBrand = () => (
	<div className="ml-4 p-2">
		<Fp
			className="img-fluid d-none d-lg-block"
			src={fp}
			alt="fp-logo-brand"
		/>
		<Fp
			className="img-fluid mt-2 d-lg-none"
			src={fpMobile}
			alt="fp-logo-brand"
		/>
	</div>
);

export { NavBrand };
