# Yearn Fork - Low Fee Vaults

A fork of [Yearn Finance](https://yearn.fi) offering the same vault strategies with **significantly lower fees**.

## Fee Comparison

| Fee Type | Yearn Standard | This Fork |
|----------|---------------|-----------|
| Management Fee | 2.0% | 0.5% |
| Performance Fee | 20.0% | 5.0% |

## Architecture

```
├── frontend/          # React/Vite/TypeScript frontend (forked from yearn.fi)
├── contracts/
│   ├── strategy/      # Tokenized Strategy contracts (lower fees)
│   └── vaults/        # V3 Vault contracts
├── .github/workflows/ # CI/CD pipeline → yearn.azurewebsites.net
```

## Tech Stack

- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, Wagmi, Rainbow Kit
- **Smart Contracts**: Solidity, Foundry
- **Deployment**: Azure Web App (yearn.azurewebsites.net)

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Contracts
```bash
cd contracts/strategy
forge build
forge test
```

## Deployment

Deployments are automated via GitHub Actions. Pushing to `main` triggers deployment to [yearn.azurewebsites.net](https://yearn.azurewebsites.net).

## License

This project is a fork of Yearn Finance open source contracts and frontend.
