import { gql } from '@apollo/client';

const JOBS_QUERY = gql`
    query {
        characters {
            results {
                image
                name
                status
                species
                gender
                origin{
                    name
                }
            }
        }
    }
`;

export default JOBS_QUERY;