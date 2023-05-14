export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    quantidadeEstoque: number;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Kit Café Gourmet", preco: 47.60, descricaoPreco: "À vista no PIX", imagem: "./assets/kitcafe.jpg", quantidadeEstoque: 10},
    { id: 2, descricao: "Café Melitta", preco: 20.00, descricaoPreco: "À vista no PIX", imagem: "./assets/cafemelitta.jpg", quantidadeEstoque: 15},
    { id: 3, descricao: "Café Baggio", preco: 60.00, descricaoPreco: "À vista no PIX", imagem: "./assets/cafe_baggio_zmart.jpg", quantidadeEstoque: 12}
]
