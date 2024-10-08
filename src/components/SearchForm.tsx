import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Corrigido o preventDefault
    onSearch(query); // Chama a função onSearch passando o query
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o nome do repositório"
      />
      <button type="submit">Pesquisar</button> {/* Corrigido o botão fora da tag form */}
    </form>
  );
};

export default SearchForm;