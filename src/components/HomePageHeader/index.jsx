import { Container, Content, Button } from "./style";
const HomePageHeader = () => {
  return (
    <>
      <Container>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea87a23-0afd-43f9-ac37-76ac5734be33/de58vgf-322e8cc3-6a2d-43a9-bba3-60240e495385.jpg/v1/fill/w_1280,h_427,q_75,strp/obsidian_dragon_sett_header_by_snowy2b_de58vgf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvYWVhODdhMjMtMGFmZC00M2Y5LWFjMzctNzZhYzU3MzRiZTMzXC9kZTU4dmdmLTMyMmU4Y2MzLTZhMmQtNDNhOS1iYmEzLTYwMjQwZTQ5NTM4NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sJrsrswlwIRoon-6gcTWzjeNI3wHeJu2LhKFf-FSVlM"
          alt="League of Legends Sett"
        />
        <Content>
          <h1>
            Acompanhe & ache os melhores jogos <span>gratuitos</span> !
          </h1>
          <h4>Acompanhe o que você joga e procure o próximo a ser jogado !</h4>
          <Button>Procurar Jogos</Button>
        </Content>
      </Container>
    </>
  );
};
export default HomePageHeader;
