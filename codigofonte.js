//edicao nos dois diretorios - github
const bcrypt = require("bcrypt");

//Edição github
let numero1 = 5;
let numero2 = 3;

let resultado = numero1 + numero2;

console.log("A soma é: " + resultado);


//---------------
//nova atualização vscode
const bcrypt = require("bcrypt");

const bcrypt = require("bcrypt");

// Banco de dados simulado
let usuarios = [];

// Cadastro de usuário
async function cadastrarUsuario(username, senha, faceId, localPermitido) {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    usuarios.push({
        username: username,
        senha: senhaCriptografada,
        faceId: faceId,
        localPermitido: localPermitido
    });

    console.log("Usuário cadastrado com sucesso!");
}

// Simulação de verificação de VPN
function detectarVPN(ip) {
    const listaVPN = ["10.0.0.1", "192.168.1.200"];
    return listaVPN.includes(ip);
}

// Simulação de reconhecimento facial
function verificarFace(faceCapturada, faceSalva) {
    return faceCapturada === faceSalva;
}

// Login
async function login(username, senha, faceCapturada, localAtual, ip) {

    const usuario = usuarios.find(u => u.username === username);

    if (!usuario) {
        console.log("Usuário não encontrado");
        return;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
        console.log("Senha incorreta");
        return;
    }

    if (!verificarFace(faceCapturada, usuario.faceId)) {
        console.log("Falha no reconhecimento facial");
        return;
    }

    if (detectarVPN(ip)) {
        console.log("VPN detectada. Acesso bloqueado.");
        return;
    }

    if (localAtual !== usuario.localPermitido) {
        console.log("Localização não permitida para registrar ponto.");
        return;
    }

    console.log("Login autorizado e ponto registrado!");
}


// TESTE

(async () => {

    await cadastrarUsuario("joao", "123456", "face_joao", "empresa");

    await login(
        "joao",
        "123456",
        "face_joao",
        "empresa",
        "8.8.8.8"
    );

})();
