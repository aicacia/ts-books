<script lang="ts">
	import { booksStore, BookType } from '$lib/state/books';

	let bookName: string;
	let bookType: BookType = BookType.Journal;

	function onCreateBook() {
		booksStore.createBook(bookType, bookName);
	}
</script>

<form action="javascript:void(0);" class="row mt-4">
	{#if bookType !== BookType.Journal}
		<div class="col-auto">
			<input
				type="text"
				class="form-control"
				placeholder="New Book Name"
				aria-label="New Book Name"
				required
				bind:value={bookName}
			/>
		</div>
	{/if}
	<div class="col-auto">
		<select
			class="form-select"
			placeholder="New Book Type"
			aria-label="New Book Type"
			required
			bind:value={bookType}
		>
			{#each Object.entries(BookType) as [key, value]}
				<option {value}>{key}</option>
			{/each}
		</select>
	</div>
	<div class="col-auto">
		<button type="submit" class="btn btn-primary" aria-label="Update" on:click={onCreateBook}>
			Create Book
		</button>
	</div>
</form>

<ul class="list-group mt-4">
	{#each $booksStore.books.rows.filter((book) => book.type === bookType) as book}
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<h3 class="fw-bold">{book.name}</h3>
			</div>
			<a role="button" class="btn btn-primary" aria-label="Update" href={`/books/${book.id}`}>
				Edit
			</a>
		</li>
	{/each}
</ul>
