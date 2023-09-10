import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW, {
        onError: (error) => {
            console.log(error);
        },
    });

    const postReview = async (obj) => {
        const review = {
            ownerName: obj.username,
            repositoryName: obj.name,
            rating: Number(obj.rating),
            text: obj.review,
        }
        const { data } = await mutate({ variables: { review } });
        return data;
    };

    return [postReview, result];
};

export default useCreateReview;