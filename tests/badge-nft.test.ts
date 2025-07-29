
// import { describe, expect, it } from "vitest";

// const accounts = simnet.getAccounts();
// const address1 = accounts.get("wallet_1")!;

// /*
//   The test below is an example. To learn more, read the testing documentation here:
//   https://docs.hiro.so/stacks/clarinet-js-sdk
// */

// describe("example tests", () => {
//   it("ensures simnet is well initialised", () => {
//     expect(simnet.blockHeight).toBeDefined();
//   });

//   // it("shows an example", () => {
//   //   const { result } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
//   //   expect(result).toBeUint(0);
//   // });
// });



// tests/badge-nft_test.ts
import { Clarinet, Tx, Chain, Account } from "https://deno.land/x/clarinet@v1.0.0/index.ts";
import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";

Clarinet.test({
  name: "Mint an academic milestone badge NFT and verify metadata",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let deployer = accounts.get("deployer")!;
    let student = accounts.get("wallet_1")!;

    // Mint a badge NFT for the student
    let block = chain.mineBlock([
      Tx.contractCall(
        "badge-nft",
        "mint-badge",
        [student.address, "Math Excellence", "2025-07-26"],
        deployer.address
      ),
    ]);

    // Check minting success and token ID returned
    block.receipts[0].result.expectOk().expectUint(1);

    // Query the metadata of minted token ID 1
    let metadata = chain.callReadOnlyFn("badge-nft", "get-badge-metadata", [1], deployer.address);

    // Confirm metadata exists and contains expected values
    metadata.result.expectSome().expectTuple();

    let tuple = metadata.result.expectSome().unwrap();

    assertEquals(tuple["student"], student.address);
    assertEquals(tuple["milestone"], "Math Excellence");
    assertEquals(tuple["date"], "2025-07-26");
  }
});
