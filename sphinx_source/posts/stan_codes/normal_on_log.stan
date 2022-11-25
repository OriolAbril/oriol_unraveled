data {
  int<lower=0> N;
  vector[N] logy;
}

parameters {
  real mu;
  real<lower=0> sigma;
}

model {
    logy ~ normal(mu, sigma);
}

generated quantities {
    vector[N] log_lik;
    vector[N] logy_hat;

    for (i in 1:N) {
        log_lik[i] = normal_lpdf(logy[i] | mu, sigma);
        logy_hat[i] = normal_rng(mu, sigma);
    }
}
