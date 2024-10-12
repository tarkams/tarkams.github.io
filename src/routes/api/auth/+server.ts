import { json } from '@sveltejs/kit';


export function GET({ request, params, url }) {
	const num = Math.floor(Math.random() * 6) + 1;
    const payload = {
        data: num
    }

	return json(payload);
}

export async function POST({ request, params, url, cookies }) {
	// const { description } = await request.json();

	const userid = cookies.get('userid') ?? '';
	// const { id } = await database.createTodo({ userid, description });
    const payload = { data: userid }

	return json(payload, { status: 201 });
}