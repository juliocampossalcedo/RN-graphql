import { MDetail } from '../../src/presentation/components/molecules/index';
import renderer from 'react-test-renderer';

describe('Test render of image and texts', () => {
    it('it should renders correctly', () => {
        //this way of testing consists in create an Snapshot of the rendered component 
        //so if it change in the future this test will fail because the rendered component
        // should be different of its previous version
        const mDetailSnap = renderer.create(
            <MDetail />
        ).toJSON();  
        expect(mDetailSnap).toMatchSnapshot();
    });
});
